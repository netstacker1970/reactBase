import { PageLayout } from "@/shared/layout/pageLayout/PageLayout";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

export const Details = () => {

    const { id } = useParams();
    const {register, handleSubmit} = useForm();
    
    return (
        <PageLayout title="Details">
            Details {id? 'Editando..' : 'Novo Registro'}
            <div>
                <h1>Details</h1>

                <form onSubmit={handleSubmit(  (data) => console.log(data))}>
                    <input type="text" {...register("name")} / >
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </PageLayout>
    );
}




