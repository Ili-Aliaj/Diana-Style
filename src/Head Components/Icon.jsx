import React from "react";
import { Helmet } from "react-helmet";
import Logo from '../../src/assets/logo-modified.jpg';

function Icon(){

    return(
        <div>
            <Helmet>
                <link rel="icon" type="image/png" href={Logo} />
            </Helmet>
        </div>
    )

}

export default Icon;