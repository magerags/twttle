import Image from "next/image";
import Link from "next/link";

export default function FingerChooserPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
      <Image
        src="/ios-light.png"
        alt="App Icon Placeholder"
        width={128}
        height={128}
        className="mb-8 rounded-3xl"
      />
      <h1 className="text-4xl font-bold mb-6">Finger Chooser</h1>
      <p className="text-lg mb-4 max-w-md">
        The easiest way to make group decisions — with just your fingers!
      </p>
      <p className="text-md mb-6 max-w-md">
        Everyone places a finger on the screen, and after a few suspenseful
        seconds… one lucky finger is chosen at random.
      </p>

      <div className="mb-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-3">Perfect for:</h2>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>Picking who goes first</li>
          <li>Deciding who buys the next round</li>
          <li>Settling debates</li>
          <li>Quick and fair group decisions</li>
        </ul>
      </div>

      <p className="text-md mb-8 max-w-md">Just tap and let fate decide.</p>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Support</h2>
        <p>
          For support, please email me at{" "}
          <a
            href="mailto:tomwhittle@hey.com"
            className="text-blue-600 hover:underline"
          >
            tomwhittle@hey.com
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-gray-600">
          You can also find our Privacy Policy{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
