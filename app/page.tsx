import BlogBox from "@/components/blogBox";

export default function Home() {
  return (
    <>
      <BlogBox img_src="https://img.freepik.com/free-photo/modern-car-futuristic-road_23-2151021098.jpg?t=st=1736204225~exp=1736207825~hmac=3fbe636ead454b9db65e996bcb5b50c9ce9107691ca4e646903cb93be910c402&w=1380" 
      blog_des="Blog Description About Feature Of Cars With AI"
      blog_title="Cars And AI"
      author="Ahmed Hashem"/>
      
      <BlogBox img_src="https://img.freepik.com/free-vector/digital-technology-face-artificial-intelligence_1017-21770.jpg?t=st=1735317282~exp=1735320882~hmac=da58e51aec486dd490e00975f59f6424995bc07fd575faf9aaf86e544ce2ca12&w=1480" 
      blog_des="Blog Description About Python And Used It in AI"
      blog_title="Python And AI"
      author="Ahmed Hashem"/>
    </>
  );
}