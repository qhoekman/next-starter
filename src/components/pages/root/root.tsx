import { Heading } from '@/components/heading/heading';
import { MainLayout } from '@/components/layouts/main/main';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export const RootPage: React.FC = () => {
  return (
    <MainLayout
      data-testid="root-page"
      className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8"
    >
      <Heading as="h1" className="mb-4 text-4xl font-extrabold tracking-tight text-primary">
        Dashboard
      </Heading>
    </MainLayout>
  );
};
