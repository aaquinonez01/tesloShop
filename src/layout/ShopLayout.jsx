
import { Navbar } from '../components/Navbar';
import { SideMenu } from '../components/SideMenu';


export const ShopLayout = ({ children}) => {
  return (
    <>
        <nav>
            <Navbar />
        </nav>

        <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>

    </>
  )
}


