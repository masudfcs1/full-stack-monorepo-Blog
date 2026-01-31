import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-red-500">Welcome to DevLog</h1>
      <p className="mt-4 text-green-700">
        Your go-to blog for full-stack development insights.
      </p>
    </div>
  );
}
