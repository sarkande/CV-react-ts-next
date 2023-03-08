import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <meta
                  name="description"
                  content="A site for demonstrating use of _document file"
               />
               <meta
                  http-equiv="Content-Type"
                  content="text/html;charset=UTF-8"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
