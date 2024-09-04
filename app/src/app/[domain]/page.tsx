export default async function Main({ params }: { params: { domain: string } }) {
  const domain = decodeURIComponent(params.domain);
  const subdomain = domain.split(".")[0];

  return (
    <div className="h-[calc(100dvh)] flex flex-col items-center p-12 text-3xl justify-center gap-2">
      <h1 className="font-extrabold">{`Welcome to ${subdomain} from ${domain}`}</h1>
      <p className="text-lg font-light">
        {`This will be the page for sub tenant sites made by the owner of the "${subdomain}" subdomain!`}
      </p>
    </div>
  );
}
