import Image from "next/image";
import Link from "next/link";

export default function AppsPage() {
  const apps = [
    {
      name: "Finger Chooser",
      description: "The easiest way to make group decisions",
      href: "/apps/finger-chooser",
      icon: "/ios-light.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <div className="grid grid-cols-1 gap-8">
        {apps.map((app) => (
          <Link href={app.href} key={app.name}>
            <div className="flex items-center p-6 border rounded-sm border-stone-200 hover:bg-stone-50 transition">
              <Image
                src={app.icon}
                alt={app.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl mr-6"
              />
              <div>
                <h2 className="text-2xl font-semibold font-lexend text-stone-800">
                  {app.name}
                </h2>
                <p className="text-stone-600">{app.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
