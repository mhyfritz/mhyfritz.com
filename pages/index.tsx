import Logo from "@/components/logo";
import { links } from "@/lib/links";
import { Canvas, useFrame } from "@react-three/fiber";
import Head from "next/head";
import Link from "next/link";
import { makeNoise3D } from "open-simplex-noise";
import * as React from "react";
import type { PlaneBufferGeometry } from "three";

const noise = makeNoise3D(Date.now());
const wireColors = {
  default: "hsl(210, 66%, 20%)",
  highlight: "hsl(210, 66%, 23%)",
};

export default function Home() {
  const [isLinkHovered, setIsLinkHovered] = React.useState(false);

  return (
    <>
      <Head>
        <title>Markus Hsi-Yang Fritz</title>
      </Head>

      <main className="relative flex items-center justify-center min-h-screen bg-gray-900">
        <Canvas
          style={{ position: "absolute" }}
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            position: [0, 0, 60],
          }}
        >
          <ambientLight />
          <pointLight position={[0, 0, 50]} />
          <WirePlane
            color={isLinkHovered ? wireColors.highlight : wireColors.default}
          />
        </Canvas>
        <div className="z-10 flex flex-col items-center justify-center h-full px-8 py-16 text-white">
          <Logo className="flex-shrink-0 w-auto h-32" />
          <h1 className="mt-2 text-6xl text-center lg:text-7xl font-brush">
            Markus Hsi-Yang Fritz
          </h1>
          <nav className="flex flex-col mt-6 space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
            {links.map((link) => (
              <NavLink
                link={link}
                handleMouseEnter={() => setIsLinkHovered(true)}
                handleMouseLeave={() => setIsLinkHovered(false)}
                key={link.id}
              />
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}

function WirePlane({ color }) {
  const geometry = React.useRef<PlaneBufferGeometry>();
  const segments = 20;

  useFrame(({ clock }) => {
    if (!geometry.current) {
      return;
    }
    const pos = geometry.current.attributes.position;
    for (let i = 2; i < (segments + 1) ** 2 * 3; i += 3) {
      const z =
        noise(
          pos.array[i - 2] / 20,
          pos.array[i - 1] / 20,
          clock.elapsedTime * 0.3
        ) * 10;
      // @ts-ignore
      pos.array[i] = z;
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh rotation={[-20, 0, 0]}>
      <planeBufferGeometry
        ref={geometry}
        args={[100, 100, segments, segments]}
      />
      <meshStandardMaterial color={color} wireframe={true} />
    </mesh>
  );
}

function NavLink({ link, handleMouseEnter, handleMouseLeave }) {
  const Anchor = React.forwardRef(function Anchor(props: any, ref) {
    return (
      <a
        ref={ref}
        className="hover:text-pink-400 focus:text-pink-400"
        {...props}
      >
        <span
          className="relative flex items-center group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 border-2 border-current rounded-full sm:p-6">
            <link.icon className="w-8 h-auto sm:w-10" />
          </div>
          <span className="ml-4 text-xl whitespace-nowrap sm:hidden sm:ml-0 sm:absolute sm:mt-2 sm:transform sm:-translate-x-1/2 sm:top-full sm:left-2/4 sm:group-hover:block sm:group-focus:block">
            {link.title}
          </span>
        </span>
      </a>
    );
  });

  if (link.url.startsWith("http")) {
    return <Anchor href={link.url} target="_blank" />;
  }

  return (
    <Link href={link.url} passHref>
      <Anchor />
    </Link>
  );
}
