import React,{useEffect,useState} from "react";
import {Container,PostForm} from "../components"
import appwriteService from "../Appwrite/config"
import { useParams } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import { Post } from "..";

function EditPost(){
    const [posts,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
    return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>

    </div>
    ):null
}

export default EditPost