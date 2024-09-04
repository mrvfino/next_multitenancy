import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      {`This is the main page of your multitenant website. (Pro-tip: Use this for
      your site's landing page)`}
      <div className="flex flex-col items-center">
        <p>Sample Tenant Links</p>
        <Link
          href={`http://user1.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
          className="underline text-sm"
        >{`user1.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}</Link>
        <Link
          href={`http://user2.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
          className="underline text-sm"
        >{`user2.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}</Link>
        <Link
          href={`http://user3.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
          className="underline text-sm"
        >{`user3.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}</Link>
      </div>
    </main>
  );
}
