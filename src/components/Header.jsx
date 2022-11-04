import { useState } from 'react';
const Header = (props) => {

    const inittheme = 'light';

    const [ theme, setNewTheme ] = useState( inittheme );

    const themeChanger = () => {

        if ( theme === 'light' ) {
            setNewTheme( 'dark' );
        } else {
            setNewTheme( 'light' );
        }
    }

    props.onChange( theme );

    return (
        <div className={`header ${ theme }` }>
             <h1 className='headerTitle'>
                Overreacted
            </h1>
            <button className='btn' onClick={themeChanger}>Toggle</button>
        </div>
    )
};

export default Header;