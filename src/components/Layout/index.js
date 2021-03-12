import React from 'react';
import l from './style.module.css';


const Layout = ({title,descr,colorBg,urlBg}) => {
    
   const layoutstile = urlBg ? { background:`url(${urlBg})`} : { background:colorBg}

    return (
        <section style= {layoutstile} className={l.root } >
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={l.descfull}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
       
    )
};


export default Layout;