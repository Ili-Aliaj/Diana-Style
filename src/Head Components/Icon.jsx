import React from "react";
import Logo from '../../src/assets/logo-modified.jpg';
import { Helmet, HelmetProvider } from "react-helmet-async";

function Icon(){

    return(
        <HelmetProvider>
            <div>
            <Helmet>
                <link rel="icon" type="image/png" href={Logo} />
            </Helmet>
        </div>
        </HelmetProvider>
    )

}

export default Icon;