function ButtonIcon({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background cursor-pointer rounded-full p-1.5 transition-all focus:outline-0"
      {...props}
    ></button>
  );
}

export { ButtonIcon };
