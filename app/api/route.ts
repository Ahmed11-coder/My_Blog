import fs from 'fs';
import path from "path";
import data from "@/data/articles.json"

export async function GET() {
    return Response.json(data);
}

export async function POST(request: Request) {
    const NewArticle = await request.json();
    
    const filePath = path.join(process.cwd(), "data", "articles.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const articles = JSON.parse(fileData);

    NewArticle["id"] = +articles[articles.length-1]['id'] + 1;

    articles.push(NewArticle);
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));

    return Response.json({message : "Article Saved Successfully!"});
}