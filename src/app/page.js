import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homee">
      <h1>Welcome to Mourya's Recipe</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
    
  );
}
