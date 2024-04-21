import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { Typography } from "../../components/ui/typography";

export function Page404() {
  return (
    <main className="flex h-[90vh] flex-col items-center justify-center gap-8 overflow-hidden">
      <div className="space-y-3 text-center">
        <Typography variant="code">404</Typography>
        <Typography variant="h1">Page non trouvée</Typography>
        <Typography variant="base">
          Désolé, nous n'avons pas trouvé la page que vous recherchez.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          Retour en lieu sûr
        </Link>
      </div>
    </main>
  );
}
