import { Button } from "@/components/ui/button"
import { SignedIn } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <h1>Lets build an AI productivity app</h1>
            <Button>Click me</Button>
            <SignedIn>
              <h1 className="text-4xl">Hello, World</h1>
            </SignedIn>
        </div>
    );
}
