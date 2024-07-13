import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button 
          size="lg" 
          variant="ghost" 
          className="w-full"
        >
          <Image 
            src="/Japan.png" alt="Japan" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button 
          size="lg" 
          variant="ghost" 
          className="w-full"
        >
          <Image 
            src="/Italy.png" alt="Italy" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button 
          size="lg" 
          variant="ghost" 
          className="w-full"
        >
          <Image 
            src="/Spain.png" alt="Spain" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button 
          size="lg" 
          variant="ghost" 
          className="w-full"
        >
          <Image 
            src="/France.png" alt="France" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button 
          size="lg" 
          variant="ghost" 
          className="w-full"
        >
          <Image 
            src="/Germany.png" alt="Germany" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
      </div>
    </footer>
  );
}