export type ForwardedComp<T = HTMLDivElement> = React.ForwardRefExoticComponent<
  React.HTMLAttributes<T> & React.RefAttributes<T>
>;
