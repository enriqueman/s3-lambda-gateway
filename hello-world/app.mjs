import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; 

const s3Client = new S3Client({ region: "us-east-1" }); // Reemplaza esto con tu región 


export async function handler(event) { 
    const bucketName = process.env.BUCKET_BUCKET_NAME; // Obtiene el nombre del bucket del entorno de la función Lambda 
    // Añadir un objeto al bucket 
    const putParams = { 
        Bucket: bucketName, 
        Key: 'hello.txt', 
        Body: '¡Hola mundo!' 
    }; 

    try { 
        let putResult = await s3Client.send(new PutObjectCommand(putParams)); 
        console.log('Resultado de la operación PUT:', putResult); 
    } catch (putError) { 
        console.log('Hubo un error al intentar añadir el objeto al bucket:', putError); 
        throw putError; 
    } 

    return { 
        statusCode: 200, 
        body: JSON.stringify({ 
            message: '¡Hola mundo! El archivo ha sido guardado en el bucket de S3.' 
        }) 
    }; 
};