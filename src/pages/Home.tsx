import { PageLayout } from "@/shared/layout/pageLayout/PageLayout";
import { Link } from "react-router";



export const Home = () => {
    return (
    <>
    <PageLayout title="Home">
   
    <div className="flex gap-2 justify-end">
        <Link to="/details/1" className="bg-blue-400 p-2 text-white rounded">Details</Link>
        <Link to="/details" className="bg-green-400 p-2 text-white rounded">Novo</Link>
    </div>
       <p>Home</p>
    </PageLayout>
    
    </>
    );

}