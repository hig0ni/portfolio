import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Animation/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요! 
                <br className="inline-block"/>
                풀스택 개발자를 꿈꾸는
                <br className="inline-block"/>
                김건희입니다.
                </h1>
                {/* <p className="mb-8 leading-relaxed">내용추가</p> */}
                <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
                <Link href="https://velog.io/@hig0ni">
                    <a className="btn-project">
                        블로그 보러가기
                    </a>
                </Link>
            </div>
            </div>
        </>
    )
}