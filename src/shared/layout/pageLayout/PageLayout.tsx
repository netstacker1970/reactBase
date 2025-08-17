import './PageLayout.css';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;

}

export const PageLayout = ({title, children}:PageLayoutProps) => {

    return (
        <div>
            <h1 className='page-title'>{title}</h1>
            {children}
        </div>
    );
}