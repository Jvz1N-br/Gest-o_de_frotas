import { supabase } from "../services/supabase";

export async function testarConexao() {
    try{
    const {data, error} = await supabase.from("veiculos").select("*").limit(1);    
    } catch (error){
        
    }
}