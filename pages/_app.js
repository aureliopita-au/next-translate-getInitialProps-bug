export default function MyApp({
    Component,
    pageProps,
    coolProp
  }) {  
    return <div>
        <div>My app props here: {coolProp}</div>
        <Component {...pageProps} />
    </div>
  }

MyApp.getInitialProps = async (appContext) => {
    // Never called
    console.log("Inside MyApp.getInitialProps", );

    return {
        coolProp: "cool prop"
    };
  };
  