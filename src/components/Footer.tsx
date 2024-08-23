import { BsLinkedin } from "solid-icons/bs";

export const Footer = () => {
  return (
    <footer class="flex justify-center bg-white p-4">
      <div class="w-full max-w-screen-2xl items-center">
        <a class="flex items-center py-2" href="/">
          <p class="pr-2">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F939bb47850b3ba8550ab1ecd55dc0890.cdn.bubble.io%2Ff1711299688706x354656530886386940%2Fbrandmark-design%2520%252826%2529.png?w=384&h=52&auto=compress&dpr=1&fit=max"
              alt="Trieve Logo"
              class="w-[12rem] border border-white"
            />
          </p>
        </a>
        <div class="flex h-0.5 w-full bg-stone-100" />
        <div class="flex w-full items-center gap-x-2 py-2">
          <a href="https://x.com/trieve.ai">𝕏</a>
          <a href="https://www.linkedin.com/company/trieveai">
            <BsLinkedin />
          </a>
          <div class="flex-1" />
        </div>
      </div>
    </footer>
  );
};
