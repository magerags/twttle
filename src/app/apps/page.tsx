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
            <div className="flex items-center p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors">
              <Image
                src={app.icon}
                alt={app.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold">{app.name}</h2>
                <p className="text-gray-700">{app.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
