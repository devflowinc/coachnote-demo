export default function Header() {
  return (
    <header class="flex justify-center bg-white p-4">
      <div class="flex w-full max-w-screen-2xl items-center">
        <a class="flex items-center" href="/">
          <p class="pr-2">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F939bb47850b3ba8550ab1ecd55dc0890.cdn.bubble.io%2Ff1711299688706x354656530886386940%2Fbrandmark-design%2520%252826%2529.png?w=384&h=52&auto=compress&dpr=1&fit=max"
              alt="Trieve Logo"
              class="w-[12rem] border border-white"
            />
          </p>
        </a>
        <div class="flex-1" />
        <a href="/">Search</a>
      </div>
    </header>
  );
}
