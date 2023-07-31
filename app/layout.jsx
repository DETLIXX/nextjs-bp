import "@styles/globals.scss";
import Provider from "./Provider";
import Header from "@components/Header/Header";

export const metadata = {
  title: "NextJS Learn",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
      <body className="bg-white">
          <Provider>
            <main className='app'>
              {children}
            </main>
          </Provider>
      </body>
    </html>
);

export default RootLayout;