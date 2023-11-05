import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      000
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
