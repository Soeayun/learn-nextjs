export const metadata = {
  title: 'About us',
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
  <div>
      {children}
      &copy; Next Js is great!
      </div>
          
);
}
