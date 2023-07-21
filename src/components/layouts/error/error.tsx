import { Button } from '@/components/button/button';
import { MainLayout } from '@/components/layouts/main/main';
import { Link } from '@/components/link/link';

type ErrorLayoutProps = {
  'data-testid'?: string;
  children?: React.ReactNode;
  status: 404 | 500;
};

export const ErrorLayout: React.FC<ErrorLayoutProps> = ({ children = null, status, ...props }) => {
  const t = (key: string) => key;

  return (
    <MainLayout data-testid={props['data-testid']} className="flex h-full flex-col justify-center">
      <section className="my-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
              {t(`error.${status}.status`)}
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-foreground  md:text-4xl">
              {t(`error.${status}.title`)}
            </p>
            <p className="mb-4 text-lg font-light text-muted-fg">
              {t(`error.${status}.description`)}
            </p>
            {children}
            <Button asChild>
              <Link href="/">{t(`error.${status}.actions.back`)}</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
