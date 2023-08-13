import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import './Blog.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Blog = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='blog-main-div'>

            <div className="image-div">
                <img src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg?w=2000" alt="" />
                <div className="gradient"></div>
            </div>

            <div className="blog-header pt-20 text-white">
                <span className='text-center flex justify-center'>
                    <h2 className='me-2 font-bold'> <Link to={"/"}>Home</Link> </h2>
                    /
                    <h2 className='ms-2 font-bold'>Blog</h2>
                </span>

                <p className='w-9/12 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat. Tempora odio enim ad impedit ea omnis reprehenderit accusantium maxime incidunt voluptatem, delectus praesentium dignissimos.</p>
            </div>

            <div className="blogs mt-24 bg-white flex flex-col md:flex-row justify-center p-10 ">

                <div className="control-div w-full md:w-3/12 md:pe-10 justify-center">
                    <span>
                        <h2 className='bg-black text-white ps-2 py-3'>BLOG ARCHIVE</h2>
                        <p className='pt-2'>2023</p>
                        <p>August</p>
                    </span>

                    <span className='pt-6 block'>
                        <h2 className='bg-black text-white ps-2 py-3'>CATEGORY</h2>
                        <p className='py-2 text-center'>select Category</p>
                    </span>

                    <div className='pt-6 '>
                        <h2 className='bg-black text-white ps-2 py-3'>LATEST COMMENTS</h2>

                        <span className='border block mt-4 p-2 '>
                            <FcBusinessman className='text-4xl'></FcBusinessman>
                            <small className=''>Test On
                                <br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, neque. Dolorem ad ullam iure nisi!
                            </small>
                        </span>
                        <span className='border block mt-4 p-2 '>
                            <FcBusinesswoman className='text-4xl'></FcBusinesswoman>
                            <small className=''>Test On
                                <br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, neque. Dolorem ad ullam iure nisi!</small>
                        </span>

                    </div>

                </div>

                <div className="all-blogs w-full md:w-9/12 grid md:grid-cols-2 gap-10 mt-10 md:mt-0">

                    <div className='div'>
                        <div className="imgDiv">
                            <img src="https://prestashop.mahardhi.com/MT08/wearzo/05/blog/5-single-default/consectetur-adipiscing.jpg" alt="" />
                        </div>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae error autem at, assumenda eos accusantium expedita quis tempore? Quis ducimus quas officiis, veniam, facilis rem tempora iusto sequi maxime sapiente explicabo, aspernatur eum. Sint?</p>
                    </div>
                    <div className='div'>
                        <div className="imgDiv">
                            <img src="https://prestashop.mahardhi.com/MT08/wearzo/05/blog/4-single-default/lorem-ipsum-dolo.jpg" alt="" />
                        </div>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae error autem at, assumenda eos accusantium expedita quis tempore? Quis ducimus quas officiis, veniam, facilis rem tempora iusto sequi maxime sapiente explicabo, aspernatur eum. Sint?</p>
                    </div>
                    <div className='div'>
                        <div className="imgDiv">
                            <img src="https://prestashop.mahardhi.com/MT08/wearzo/05/blog/1-single-default/the-standard-lorem-ipsum.jpg" alt="" />
                        </div>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae error autem at, assumenda eos accusantium expedita quis tempore? Quis ducimus quas officiis, veniam, facilis rem tempora iusto sequi maxime sapiente explicabo, aspernatur eum. Sint?</p>
                    </div>

                </div>

            </div>







        </div>
    );
};

export default Blog;