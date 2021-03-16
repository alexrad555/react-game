import l from './style.module.css';
import cn from 'classnames';

const Layout = ({ id, title, colorBg, urlBg, children }) => {
    
    
    const secStyle = {};

    if (urlBg) {
        secStyle.backgroundImage = `url(${urlBg})`;

    }

    if (colorBg) {
        secStyle.backgroundColor = colorBg;
    }


    return (
        <section 
            style= {secStyle} 
            className={l.root } 
            id={id}
        >
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={cn(l.desc, l.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
       
    )
};


export default Layout;