import { SignOutButton } from './components/SignOutButton';

export default async function Home() {

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-10 items-center w-full justify-between lg:justify-end my-2 px-4">
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello from the homepage!</h1>
      </main>
    </>
  )
}
