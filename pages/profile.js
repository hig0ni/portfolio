import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Profile() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>김건희 Portfolio</title>
                    <meta name="description" content="프로젝트 포트폴리오" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div id="resume_print_area" className="print_area">
                    <div className="print_wrap">
                        <section className="resume_basic">
                            <div className="resume_view">
                                <div className="resume_top">
                                    <h1 className="user_name">김건희</h1>
                                    <div className="user_state">신입</div>
                                </div>
                                <p className="user_desc">남, 1995 (28세)</p>
                                <ul className="user_info">
                                    <li className="user_email">rjs******@naver.com</li>
                                    <li className="user_phone"><span>010-****-2256 </span></li>
                                    <li className="user_address"><span>인천 남동구 음실로</span></li>
                                </ul>
                            </div>
                            <ul className="resume_dashboard">
                                <li className="item"><strong className="tit">학력</strong><p className="txt">대학교(4년) 졸업<br/>한국항공대학교</p></li>
                                <li className="item"><strong className="tit">전공</strong><p className="txt">기계공학과</p></li>
                                <li className="item"><strong className="tit">업무경험</strong><p className="txt">총  11개월 (퇴사)<br/>한국장애인고용공단 인천지사</p></li>
                                <li className="item"><strong className="tit">희망연봉</strong><p className="txt">3,400~3,600만원</p></li>
                                <li className="item"><strong className="tit">블로그</strong><Link href="https://velog.io/@hig0ni"><a className="file_link"> <span>https://velog.io/@hig0ni</span></a></Link></li>
                            </ul>
                        </section>
                        <div className="resume_part">
                            <div className="part">
                                <div className="box_tit">
                                    <h2 className="tit">학력</h2>
                                    <span className="txt">대학교(4년) 졸업</span>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">
                                            <span>한국항공대학교</span>(4년제)
                                            <span className="txt">(주간)</span>
                                        </h3>
                                         <span className="date">2014.03 ~ 2021.02 (졸업)</span>
                                         <p className="desc">기계공학과</p>
                                         <dl className="faculty"><dt>학점</dt><dd>3.36/4.5</dd><dt>지역</dt><dd>경기</dd><dt>논문/작품</dt><dd>진동신호를 이용한 항공전자장비 냉각용 팬 베어링의 고장예측 연구</dd></dl>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">
                                            <span>인천만수고등학교</span>                                           
                                        </h3>
                                        <span className="date">2011.03 ~ 2014.02 (졸업)</span>
                                        <p className="desc">이과계열</p>
                                    </div>
                                </div>
                            </div>
                            <div className="part">
                                <div className="box_tit">
                                    <h2 className="tit">경력</h2>
                                    <span className="txt">총  11개월</span>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">한국장애인고용공단 인천지사</h3>
                                        <span className="date">2023.06 ~ 2023.07<span className="period">2개월</span></span>
                                        <p className="desc">기업지원부 인턴/수습&nbsp;(팀원)</p>
                                        <p className="desc">재물조사 및 사무업무 보조</p>
                                        <dl className="faculty"><dt>퇴사사유</dt><dd>계약만료</dd><dt>근무지역</dt><dd>인천</dd></dl>
                                    </div>
                                    <div className="box_list certification">
                                        <h3 className="tit">한국교통안전공단</h3>
                                        <span className="date">2021.05 ~ 2022.01<span className="period">9개월</span></span>
                                        <p className="desc">자동차안전연구원 자동차인증처 인턴/수습(팀원)</p>
                                        <p className="desc">자동차 안전검사</p>
                                        <dl className="faculty"><dt>퇴사사유</dt><dd>계약만료</dd><dt>근무지역</dt><dd>전북</dd></dl>
                                    </div>
                                </div>
                            </div>
                            <div className="part part_etc">
                                <div className="box_tit">
                                    <h2 className="tit">경험/활동/교육</h2>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">카카오/한국전파진흥협회</h3>
                                        <span className="date">2022.11 ~ 2023.05</span>
                                        <p className="desc">카카오 클라우드 스쿨 2기</p>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">[인프런X코드캠프]</h3>
                                        <span className="date">2023.08 ~ 2023.09</span>
                                        <p className="desc"> 부트캠프에서 만든 고농축 백엔드 코스</p>
                                    </div>
                                </div>
                            </div>
                            <div className="part">
                                <div className="box_tit">
                                    <h2 className="tit">자격/어학/수상</h2>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">정보처리기사<span className="txt">(최종합격)</span></h3>
                                        <span className="date">2023.09 </span>
                                        <p className="desc">한국산업인력공단</p>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">SQL개발자(SQLD자격)<span className="txt">(최종합격)</span></h3>
                                        <span className="date">2023.07 </span>
                                        <p className="desc">한국데이터베이스진흥센터</p>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">컴퓨터활용능력1급<span className="txt">(최종합격)</span></h3>
                                        <span className="date">2018.09 </span>
                                        <p className="desc">대한상공회의소</p>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">일반기계기사<span className="txt">(최종합격)</span></h3>
                                        <span className="date">2021.08 </span>
                                        <p className="desc">한국산업인력공단</p>
                                    </div>
                                    <div className="box_list">
                                        <h3 className="tit">한국사능력검정시험 1급<span className="txt">(최종합격)</span></h3>
                                        <span className="date">2019.08 </span>
                                        <p className="desc">국사편찬위원회</p>
                                    </div>
                                </div>
                            </div>
                            <div className="part">
                                <div className="box_tit">
                                    <h2 className="tit">취업우대사항</h2>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">병역 : 군필<span className="txt">(육군/병장)</span></h3>
                                         <span className="date"> 2016.03 ~ 2017.12</span>
                                        <p className="desc">만기전역</p>
                                    </div>
                                </div>
                            </div>
                            <div className="part">
                                <div className="box_tit">
                                    <h2 className="tit">기타</h2>
                                </div>
                                <div className="box_con">
                                    <div className="box_list">
                                        <h3 className="tit">블로그</h3>
                                        <Link href="https://velog.io/@hig0ni">
                                            <a className="file_link">
                                                <span className="desc">https://velog.io/@hig0ni</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

