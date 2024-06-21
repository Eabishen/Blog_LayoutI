import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogPara from "../components/BlogPara";
import { Link, useParams } from "react-router-dom";

import { IoCheckmark } from "react-icons/io5";
import { MdBarChart, MdOutlineChevronLeft } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { SiMyspace } from "react-icons/si";
import {
  FaArrowRight,
  FaBehance,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaPinterest,
  FaPinterestP,
  FaSearchPlus,
} from "react-icons/fa";

import LandingMain from "../assets/images/blogimages/4.jpg";
import DashedIcon from "../components/DashedIcon";
import sideProfile1 from "../assets/images/sideuserImg/sideuser1.jpg";
import sideProfile2 from "../assets/images/sideuserImg/sideuser2.jpg";
import sideProfile3 from "../assets/images/sideuserImg/sideuser3.jpg";
import sideProfile4 from "../assets/images/sideuserImg/sideuser4.jpg";
import sideProfile5 from "../assets/images/sideuserImg/sideuser5.jpg";

import i1 from "../assets/images/sideuserImg/i1.png";
import i2 from "../assets/images/sideuserImg/i2.png";
import i3 from "../assets/images/sideuserImg/i3.png";
import i4 from "../assets/images/sideuserImg/i4.png";
import i5 from "../assets/images/sideuserImg/i5.png";
import i6 from "../assets/images/sideuserImg/i6.png";
import i7 from "../assets/images/sideuserImg/i7.png";
import i8 from "../assets/images/sideuserImg/i8.png";
import i9 from "../assets/images/sideuserImg/i9.png";
import i10 from "../assets/images/sideuserImg/i10.png";

import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";
import featuredGallery from "../assets/images/gallery/featuredBanner.jpg";
import galleryGrid from "../assets/images/blogimages/7.jpg";
import galleryGrid1 from "../assets/images/gallery/gallerygrid1.webp";
import galleryGrid2 from "../assets/images/gallery/gallerygrid2.webp";
import authorImage from "../assets/images/category/author.png";
import SingleBlogAdBanner from "../components/SingleBlogAdBanner";
import MorePost from "../components/MorePost";
import SideContent from "../components/SideContent";
import AuthorSocialLinks from "../components/AuthorSocialLinks";
const SideUserInfo = [
  {
    img: sideProfile1,
    title: "Integer Maecenas",
    subtitle: " Eget Viverra",
  },
  {
    img: sideProfile2,
    title: "A Pretium Enim Dolor ",
    subtitle: "Donec Eu Venenatis Curabitur",
  },
  {
    img: sideProfile3,
    title: "A Vivamus Penatibus Enim ",
    subtitle: "Sit Et Quam Vel Consequat",
  },
  {
    img: sideProfile4,
    title: "Integer Maecenas",
    subtitle: " Eget Viverra",
  },
  {
    img: sideProfile5,
    title: "Integer Maecenas",
    subtitle: " Eget Viverra",
  },
];

const Blogdetails = () => {
  const { id } = useParams();

  const [singleBlogPost, setSingleBlogPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchsingleBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setSingleBlogPost(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchsingleBlog();

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [id]);

  return loading ? (
    <div className="flex items-center justify-center h-screen text-xl font-bold">
      Please wait. Loading...
    </div>
  ) : (
    <div className="bg-[#F8F8F8]">
      <header className="bg-black text-white">
        <div className="container  mx-auto px-4 py-2 ">
          <Navbar btnStyle={true} />
        </div>
      </header>
      <div className="container mx-auto px-4 pt-6 pb-4 font-semibold text-xs">
        <Link to="/">Home</Link> &gt;{" "}
        <span className="text-gray-500 truncate whitespace-pre-wrap break-words">
          {singleBlogPost && singleBlogPost.title}
        </span>
      </div>

      <main>
        <section>
          <div className="container mx-auto pt-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-full lg:col-span-8 relative max-h-full h-[480px] max-w-full p-6 bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 h-full text-white flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <span className="p-1 text-xs md:text-base rounded-sm bg-white/25 backdrop-blur-sm">
                      Aenean Eleifend
                    </span>
                    <span className="p-1 text-xs md:text-base rounded-sm bg-white/25 backdrop-blur-sm">
                      Aenean Eleifend
                    </span>
                    <span className="p-1 text-xs md:text-base rounded-sm bg-white/25 backdrop-blur-sm">
                      Aliquam
                    </span>
                  </div>
                  <div>
                    <h1 className="uppercase text-2xl md:text-4xl font-medium cust-font text-balance leading-normal lg:leading-relaxed">
                      {singleBlogPost && singleBlogPost.title}
                    </h1>
                    <p className="text-md md:text-lg tracking-wide my-2">
                      Relationship tips couples therapists are giving all the
                      time
                    </p>
                    <div className="text-xs lg:text-base flex items-center gap-0.5 lg:gap-2">
                      <div className="">by Joanna Wellick</div>
                      <DashedIcon color="white" />
                      <div className="flex items-center">
                        <CiClock2 />
                        <span className="ml-1">2 minute read</span>
                      </div>
                      <DashedIcon color="white" />
                      <div className="flex items-center">
                        <MdBarChart />
                        <span className="ml-1">1.6K Views</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 -z-1">
                  <img
                    className="w-full h-full object-cover"
                    src={LandingMain}
                    alt="herosection"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4  flex flex-wrap px-4 flex-row md:flex-col gap-6 min-w-48">
                {SideUserInfo.map((userInfo, i) => (
                  <div className="relative flex gap-4" key={i}>
                    <div className="aspect-square overflow-hidden rounded-full size-4 bg-green-500 absolute left-0 top-0" />
                    <div className="aspect-square overflow-hidden rounded-full size-16">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={userInfo.img}
                        alt="asd"
                      />
                    </div>
                    <div className="font-semibold">
                      <p>{userInfo.title}</p>
                      <p>{userInfo.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto ">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-full lg:col-span-8">
                <div className=" bg-white py-14 px-4">
                  <div className="flex flex-col xl:flex-row gap-6">
                    {/* Share menu */}
                    <div className="">
                      <div className="text-lg leading-tight sticky top-4">
                        <h4 className="font-semibold ">966</h4>
                        <span className=" text-sm text-gray-500">Shares</span>
                        <hr className="my-2" />
                        <div className="flex flex-row justify-center gap-2 xl:gap-0 xl:justify-start xl:flex-col ">
                          <div className="flex items-center">
                            <div className="size-14">
                              <img
                                className="w-full h-full object-cover object-center"
                                src={i1}
                                alt="facebook"
                              />
                            </div>
                            <div className="text-sm p-1 border border-gray-300 leading-none text-gray-500 relative sidetraingle">
                              <MdOutlineChevronLeft className="absolute top-1/2 -translate-y-1/2 -left-[10px] text-gray-300 bg-white" />
                              528
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="size-14">
                              <img
                                className="w-full h-full object-cover object-center"
                                src={i2}
                                alt="twitter"
                              />
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="size-14">
                              <img
                                className="w-full h-full object-cover object-center"
                                src={i4}
                                alt="Pinterest"
                              />
                            </div>
                            <div className="text-sm p-1 border border-gray-300 leading-none text-gray-500 relative sidetraingle">
                              <MdOutlineChevronLeft className="absolute top-1/2 -translate-y-1/2 -left-[10px] text-gray-300 bg-white" />
                              528
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="size-14 p-2 bg-white">
                              <img
                                className="w-full h-full object-cover object-center"
                                src={i10}
                                alt="facebook"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blog Post */}
                    <div>
                      <p className=" leading-relaxed">
                        {singleBlogPost && singleBlogPost.body}
                      </p>

                      <div className="py-6">
                        <h4 className="uppercase tracking-widest font-light">
                          TABLE OF CONTENTS
                        </h4>
                        <div className="px-4">
                          <ul className="pl-4 my-4">
                            <li className="flex items-center gap-4">
                              <span className="flex-shrink-0 size-6 bg-gray-300 rounded-full my-2 grid place-content-center">
                                1
                              </span>
                              <span className="text-green-500">
                                Nam condimentum varius justo
                              </span>
                            </li>
                            <li>
                              <div className="flex items-center gap-4">
                                <span className="flex-shrink-0 size-6 bg-gray-300 rounded-full my-2 grid place-content-center">
                                  2
                                </span>
                                <span className="text-green-500">
                                  Faucibus nullam luctus felis pretium donec
                                </span>
                              </div>
                              <ul className="list-disc marker:text-gray-300 pl-12">
                                <li className="text-green-500 my-2">
                                  Tincidunt veni tellus orci aenean consectetuer
                                </li>
                                <li className="text-green-500 my-2">
                                  Eu ridiculus fringilla
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <hr className="inline-block w-full my-6" />

                      <div className="mb-6">
                        <h4 className="text-2xl lg:text-3xl font-semibold">
                          Eu ridiculus fringilla aenean
                        </h4>
                        <BlogPara>
                          Eget aenean tellus venenatis. Donec odio tempus. Felis
                          arcu pretium metus nullam quam aenean sociis quis sem
                          neque vici libero. Venenatis nullam fringilla pretium
                          magnis aliquam nunc vulputate integer augue ultricies
                          cras. Eget viverra feugiat cras ut. Sit natoque montes
                          tempus ligula eget vitae pede rhoncus maecenas
                          consectetuer commodo condimentum aenean.
                        </BlogPara>

                        <hr className="inline-block w-full my-6" />
                        <div className="flex gap-4 text-gray-500">
                          <div>
                            <FaArrowRight className="text-2xl text-gray-300" />
                          </div>
                          <div>
                            <h4 className=" text-black text-2xl">
                              Quis adipiscing ligula donec ullamcorper tellus.
                              Id odio vulputate aliquam nullam vitae tincidunt
                              semper etiam quam donec quis.
                            </h4>
                            <p>Donec Massa Integer</p>
                          </div>
                        </div>
                        <hr className="inline-block w-full my-6" />

                        <BlogPara>
                          Ut eu sem aenean imperdiet. Hendrerit penatibus sem
                          adipiscing aliquet consequat nec orci nascetur. Etiam
                          massa quam dolor aenean maecenas sociis tellus
                          consectetuer. In sit donec massa integer nisi mus
                          viverra odio ultricies ridiculus. Sapien sem lorem.
                          Aenean sem venenatis arcu tellus fringilla vulputate
                          quis vici nullam nec. Cum quam veni lorem elit aliquet
                          pede in enim. Quam tempus dolor sem consectetuer
                          ullamcorper etiam justo sed in orci eu ridiculus{" "}
                        </BlogPara>
                        <BlogPara>
                          <ol className="list-decimal ml-4">
                            <li>Mollis lorem vitae varius.</li>
                            <li>
                              Felis laoreet justo aenean curabitur donec
                              consequat sit nascetur tellus dapibus.
                            </li>
                            <li>
                              Maecenas imperdiet vitae vidi vel parturient
                              eleifend mollis eu libero.
                            </li>
                            <li>
                              Dictum libero felis feugiat fringilla sed etiam
                              vel sem nullam elit vitae eu.
                            </li>
                            <li>
                              Felis nec eget curabitur sapien nisi aliquam
                              pretium donec dapibus feugiat. Faucibus enim
                              venenatis mus semper.
                            </li>
                          </ol>
                        </BlogPara>

                        <BlogPara>
                          Enim dapibus ante sapien eleifend dis vulputate quis
                          viverra ultricies vitae eros. Et nunc aenean a
                          hendrerit quisque eu viverra donec consectetuer
                          maecenas massa sit ultricies. Tellus ante quis vici
                          elementum etiam.
                        </BlogPara>

                        <h4 className="text-2xl lg:text-3xl font-semibold">
                          Faucibus nullam luctus felis pretium donec
                        </h4>
                        <BlogPara>
                          Amet tempus viverra ut libero nascetur id veni
                          ridiculus rhoncus. Dis donec cras ultricies. Eros
                          vivamus enim nec nulla semper imperdiet aenean montes
                          dictum porttitor metus.
                        </BlogPara>
                        {/* Gallery */}
                        <div className="grid a grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="spect-video h-[240px]">
                            <img
                              src={gallery1}
                              className="w-full h-full object-cover object-center"
                              alt="galleryImage"
                            />
                          </div>
                          <div className="spect-video h-[240px]">
                            <img
                              src={gallery2}
                              className="w-full h-full object-cover object-center"
                              alt="galleryImage"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mb-4">
                          <div className="col-span-full md:col-span-2 lg:col-span-3">
                            <img
                              src={gallery3}
                              className="w-full h-full object-cover object-center"
                              alt="galleryImage"
                            />
                          </div>
                          <div className="col-span-full md:col-span-2 lg:col-span-1">
                            <img
                              src={gallery4}
                              className="w-full h-full object-cover object-center"
                              alt="galleryImage"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 ">
                          <div className="col-span-full md:col-span-2 lg:col-span-1">
                            <img
                              className="w-full h-full object-cover object-center"
                              src={gallery5}
                              alt="galleryImage"
                            />
                          </div>
                          <div className="col-span-full md:col-span-2 lg:col-span-3">
                            <img
                              className="w-full h-full object-cover object-center"
                              src={gallery6}
                              alt="galleryImage"
                            />
                          </div>
                        </div>

                        {/* Gallery */}

                        <BlogPara>
                          Sit dis sed ante integer ullamcorper vel donec tellus
                          a. Nisi vici vulputate elit quis adipiscing aenean
                          imperdiet justo varius. Vel eget luctus a sem pede sit
                          metus nulla maecenas. Etiam eleifend curabitur lorem.
                          Viverra faucibus sem ultricies vitae etiam quam id
                          feugiat in tellus vici ut. Tellus quam varius commodo
                          luctus aliquam nec amet nullam quis viverra sit
                          fringilla consectetuer.
                        </BlogPara>
                        <BlogPara>
                          <ul className="">
                            <li className="flex items-center gap-2">
                              <IoCheckmark className="text-green-500" />{" "}
                              Ultricies sit semper leo dolor maecenas.
                            </li>
                            <li className="flex items-center gap-2">
                              <IoCheckmark className="text-green-500" /> Magnis
                              nam penatibus justo nec quis eget amet venenatis
                              integer rutrum eleifend commodo tincidunt.
                            </li>
                            <li className="flex items-center gap-2">
                              <IoCheckmark className="text-green-500" /> Aenean
                              nunc pretium lorem ullamcorper leo.
                            </li>
                            <li className="flex items-center gap-2">
                              <IoCheckmark className="text-green-500" /> Nec
                              arcu ullamcorper lorem mus eu.
                            </li>
                            <li className="flex items-center gap-2">
                              <IoCheckmark className="text-green-500" /> Elit
                              natoque mollis quisque.
                            </li>
                          </ul>
                        </BlogPara>

                        <BlogPara>
                          Sit dis sed ante integer ullamcorper vel donec tellus
                          a. Nisi vici vulputate elit quis adipiscing aenean
                          imperdiet justo varius. Vel eget luctus a sem pede sit
                          metus nulla maecenas. Etiam eleifend curabitur lorem.
                          Viverra faucibus sem ultricies vitae etiam quam id
                          feugiat in tellus vici ut. Tellus quam varius commodo
                          luctus aliquam nec amet nullam quis viverra sit
                          fringilla consectetuer.
                        </BlogPara>

                        <h4 className="text-2xl lg:text-3xl font-semibold">
                          Tincidunt veni tellus orci aenean consectetuer
                        </h4>

                        <BlogPara>
                          Sociis consequat adipiscing sit curabitur donec sem
                          luctus cras natoque vulputate dolor eget dapibus. Nec
                          vitae eros ullamcorper laoreet dapibus mus ac ante
                          viverra. A aenean sit augue curabitur et parturient
                          nisi sed enim. Nulla nec quis sit quisque sem commodo
                          ultricies neque. Lorem eget venenatis dui ante luctus
                          ultricies tellus montes. Quis in sapien tempus.
                        </BlogPara>

                        <div className="relative h-[420px] max-h-full p-4">
                          <div className="flex items-center justify-between relative z-10 text-white">
                            <div className="p-2 grid place-content-center size-8 backdrop-blur-sm rounded-full bg-white/20">
                              <FaPinterestP />
                            </div>
                            <div className="p-2 grid place-content-center size-8 backdrop-blur-sm rounded-full bg-white/20">
                              <FaSearchPlus />
                            </div>
                          </div>
                          <div className="absolute inset-0 ">
                            <div className="absolute inset-0 bg-black/40"></div>
                            <img
                              className="h-full w-full object-cover object-center"
                              src={featuredGallery}
                              alt="gallery"
                            />
                          </div>
                        </div>
                        <p className="text-gray-500 mt-1">
                          Ut pede leo libero cum ridiculus
                        </p>

                        <BlogPara>
                          Sociis consequat adipiscing sit curabitur donec sem
                          luctus cras natoque vulputate dolor eget dapibus. Nec
                          vitae eros ullamcorper laoreet dapibus mus ac ante
                          viverra. A aenean sit augue curabitur et parturient
                          nisi sed enim. Nulla nec quis sit quisque sem commodo
                          ultricies neque. Lorem eget venenatis dui ante luctus
                          ultricies tellus montes. Quis in sapien tempus.
                        </BlogPara>

                        <h4 className="text-2xl lg:text-3xl font-semibold">
                          Eu ridiculus fringilla
                        </h4>

                        <BlogPara>
                          Nam dictum vitae penatibus ligula id sem eget ante
                          faucibus feugiat nascetur vel. Pretium vitae mus
                          rhoncus sit maecenas quam felis orci adipiscing.
                          Aenean parturient eget quam. Leo vel lorem sociis
                          phasellus arcu dolor. Dis donec eu pede.
                        </BlogPara>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="max-h-full">
                            <img
                              className="w-full h-full object-cover object-center"
                              src={galleryGrid}
                              alt="featured"
                            />
                          </div>
                          <div className="max-h-full">
                            <img
                              className="w-full h-full object-cover object-center"
                              src={galleryGrid1}
                              alt="featured"
                            />
                          </div>
                          <div className="max-h-full">
                            <img
                              className="w-full h-full object-cover object-center"
                              src={galleryGrid2}
                              alt="featured"
                            />
                          </div>
                        </div>

                        <BlogPara>
                          Venenatis ante veni nullam ridiculus penatibus vidi eu
                          consectetuer integer. Vulputate ipsum lorem nascetur
                          rhoncus. Aliquam vitae elit blandit enim eget laoreet.
                          Dapibus leo sociis quis nulla adipiscing amet integer
                          sem ullamcorper in maecenas eu imperdiet
                        </BlogPara>

                        <BlogPara>
                          Ante blandit amet ultricies ut in nam massa rhoncus.
                          Eget eu massa nisi quis viverra dapibus aliquam. Id
                          ridiculus lorem ut amet dis orci tellus etiam aenean
                          pellentesque.
                        </BlogPara>

                        <BlogPara>
                          Maecenas tempus aenean nulla viverra neque vel nec
                          cras justo sapien condimentum ut varius. Blandit sem
                          etiam vel nullam vulputate sociis amet varius dolor.
                          Vitae a ut. Etiam rhoncus ante sit. Nisi nullam donec
                          dui eu phasellus a elementum elit faucibus nec. Eros
                          eu pulvinar pede luctus sit aenean lorem.
                        </BlogPara>

                        <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center">
                          <div className="w-full md:w-32 text-center">
                            <div className="text-xl">10K</div>
                            <div className="text-gray-500">Shares</div>
                          </div>
                          <div className="flex-1">
                            <button className="w-full text-center justify-center gap-2 text-white py-2 px-4 flex items-center bg-blue-900">
                              <FaFacebook />
                              <span>Shares 636</span>
                            </button>
                          </div>
                          <div className="flex-1">
                            <button className="w-full text-center justify-center gap-2 text-white py-2 px-4 flex items-center bg-red-600">
                              <FaPinterest />
                              <span>Shares 636</span>
                            </button>
                          </div>
                          <div className="flex-1">
                            <button className="w-full text-center justify-center gap-2 text-white py-2 px-4 flex items-center bg-sky-600">
                              <FaLinkedinIn />
                              <span>Shares 636</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 my-6">
                          <div className="size-32 flex-shrink-0 rounded-full overflow-hidden">
                            <img
                              className="h-full w-full object-cover object-center "
                              src={authorImage}
                              alt="author"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-4">
                              Luci Avetisyan
                            </h4>
                            <div>
                              <p className="text-gray-500 font-semibold">
                                Sed cras nec a nulla sapien adipiscing ut etiam.
                                In sem viverra mollis metus quam adipiscing vel
                                nascetur condimentum felis sapien. Pede
                                consequat laoreet enim sit aliquet mollis
                                semper.
                              </p>
                              <AuthorSocialLinks />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center my-6">
                          <button className="bg-neutral-700 text-white min-w-32 py-2 px-6 inline-block">
                            View Comments (0)
                          </button>
                        </div>

                        {/* Sub Banner */}
                        <SingleBlogAdBanner />
                        {/* Ends */}

                        <div className="my-6">
                          <MorePost />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="col-span-full lg:col-span-4 py-14">
                <SideContent />
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogdetails;
