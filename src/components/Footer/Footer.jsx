// Style
import styled from 'styled-components';
// Icons
import orangeIcon from './../../images/icons/orange-icon.svg'
// Components
import TargetLink from './../TargetLink/TargetLink'
import TargetButton from './../TargetButton/TargetButton'
import Container from './../Container/Container'

const Footer = (props) => {
    const OuterFooter = styled.footer`
        border-top: 1px solid black;
        padding: 50px 0 0;
        background-color: ${props => props.theme.main};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        & svg {
            margin-top: 20px;
            margin-right: 20px;
        };
    `;

    const GridFooter = styled.div`
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
        grid-row-gap: 2em;
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
    `;

    const FooterColumn = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & h3 {
            font-size: 24px;
            margin-bottom: 20px;
        }
    `;

    const FooterList = styled.ul`
        list-style: none;
        & li:not(:last-child) {
            margin-bottom: 20px;
        };
    `;

    const UnderFooter = styled.div`
        max-width: 1140px;
        width: 100%;
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & p {
            font-size: 14px;
        }
    `;

    const Buttonscontainer = styled.div`
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1024px) {
            display: none;
        }
    `;

    const LinksContainer = styled.div`
        display: flex;
    `;

    return (
        <OuterFooter {...props}>
            <Container>
                <GridFooter>
                    <FooterColumn>
                        <div>
                            <h3>
                                Контактная информация
                            </h3>
                            <FooterList>
                                <li>
                                    <TargetLink tag="a" href="tel:+78633226162">
                                        +7 863 322-61-62
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink tag="a" href="mailto:info@glonass-rg.ru">
                                        info@glonass-rg.ru
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink tag="a" href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2%D0%B0,+1,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344033/@47.2014739,39.6027455,15.52z/data=!4m5!3m4!1s0x40e3bf14d3aabdff:0x62ed058cbeb3b2d0!8m2!3d47.2031407!4d39.6041502" target="_blank">
                                        г.Ростов-на-Дону, ул.Пескова, 1/2, оф.15
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink tag="a" href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0,+327,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+350000/@45.0384518,38.9652603,17z/data=!3m1!4b1!4m5!3m4!1s0x40f04f9fda6ca129:0x299ba57b7c0d5c16!8m2!3d45.038448!4d38.967449" target="_blank">
                                        г.Краснодар, ул.Калинина, 327, оф.407
                                    </TargetLink>
                                </li>
                            </FooterList>
                        </div>
                        <Buttonscontainer>
                            <TargetButton style={{ minWidth: 150 }} tag="a" href="https://hosting.wialon.com/" target="_blank">
                                Демо wialon
                            </TargetButton>
                            <TargetButton style={{ minWidth: 170 }} tag="a" href="https://online.omnicomm.ru/" target="_blank">
                                Демо omnicomm
                            </TargetButton>
                        </Buttonscontainer>
                    </FooterColumn>
                    <FooterColumn>
                        <div>
                            <h3>
                                Отраслевые решения
                            </h3>
                            <FooterList>
                                <li>
                                    <TargetLink to="/industry/special-equipment">
                                        Мониторинг спецтехники
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/industry/agricultural-equipment">
                                        Мониторинг сельхозтехники
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="industry/social-equipment">
                                        Мониторинг общественного транспорта
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/industry/gasoline-equipment">
                                        Мониторинг бензовозов и топливозаправщиков
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/industry/cargo-equipment">
                                        Мониторинг грузовых автомобилей
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/industry/passenger-equipment">
                                        Мониторинг легковых автомобилей
                                    </TargetLink>
                                </li>
                            </FooterList>
                        </div>
                    </FooterColumn>
                    <FooterColumn>
                        <div>
                            <h3>
                                Оборудование
                            </h3>
                            <FooterList>
                                <li>
                                    <TargetLink to="/category/video">
                                        Видеомониторинг
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/category/terminals">
                                        Терминалы
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/category/sensors">
                                        Датчики уровня топлива
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink to="/category/other-eqipments">
                                        Дополнительное оборудование
                                    </TargetLink>
                                </li>
                            </FooterList>
                            <LinksContainer>
                                <TargetLink tag="a" target="_blank" href="">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28 14C28 6.26719 21.7328 0 14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C14.082 28 14.1641 28 14.2461 27.9945V17.1008H11.2383V13.5953H14.2461V11.0141C14.2461 8.02266 16.0727 6.39297 18.7414 6.39297C20.0211 6.39297 21.1203 6.48594 21.4375 6.52969V9.65781H19.6C18.1508 9.65781 17.8664 10.3469 17.8664 11.3586V13.5898H21.3391L20.8852 17.0953H17.8664V27.4586C23.718 25.7797 28 20.393 28 14Z" fill="#FF9900" />
                                    </svg>
                                </TargetLink>
                                <TargetLink tag="a" target="_blank" href="">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2562 16.6227L16.8102 13.9998L12.2562 11.377V16.6227Z" fill="#FF9900" />
                                        <path d="M14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C21.7308 28 28 21.7308 28 14C28 6.2692 21.7308 0 14 0ZM22.7479 14.0143C22.7479 14.0143 22.7479 16.8536 22.3877 18.2227C22.1858 18.9721 21.5949 19.563 20.8456 19.7646C19.4764 20.125 14 20.125 14 20.125C14 20.125 8.53787 20.125 7.15445 19.7503C6.40506 19.5486 5.81418 18.9576 5.6123 18.2082C5.25192 16.8536 5.25192 14 5.25192 14C5.25192 14 5.25192 11.1609 5.6123 9.79184C5.81396 9.04245 6.41937 8.43704 7.15445 8.23538C8.52356 7.875 14 7.875 14 7.875C14 7.875 19.4764 7.875 20.8456 8.24969C21.5949 8.45135 22.1858 9.04245 22.3877 9.79184C22.7624 11.1609 22.7479 14.0143 22.7479 14.0143Z" fill="#FF9900" />
                                    </svg>
                                </TargetLink>
                                <TargetLink to="/main">
                                    <svg width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.7727 2.04541H10.2273C5.7086 2.04541 2.04547 5.70853 2.04547 10.2272V34.7727C2.04547 39.2914 5.7086 42.9545 10.2273 42.9545H34.7727C39.2914 42.9545 42.9546 39.2914 42.9546 34.7727V10.2272C42.9546 5.70853 39.2914 2.04541 34.7727 2.04541Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18182 0C3.66312 0 0 3.66312 0 8.18182V36.8182C0 41.3368 3.66312 45 8.18182 45H36.8182C41.3368 45 45 41.3368 45 36.8182V8.18182C45 3.66312 41.3368 0 36.8182 0H8.18182ZM22.5 40.9091C32.6671 40.9091 40.9091 32.6671 40.9091 22.5C40.9091 12.3329 32.6671 4.09091 22.5 4.09091C12.3329 4.09091 4.09091 12.3329 4.09091 22.5C4.09091 32.6671 12.3329 40.9091 22.5 40.9091Z" fill="#006BCD" />
                                        <path d="M12.8384 11.455C18.3587 6.61653 26.6412 6.61653 32.1617 11.455L33.5477 10.0689C27.2592 4.46989 17.7408 4.46989 11.4523 10.0689L12.8384 11.455Z" fill="#006BCD" />
                                        <path d="M11.4549 12.8383L10.0688 11.4521C4.46983 17.7407 4.46983 27.2591 10.0688 33.5476L11.4549 32.1616C6.61647 26.6411 6.61647 18.3586 11.4549 12.8383Z" fill="#006BCD" />
                                        <path d="M12.8384 33.5449L11.4523 34.9311C17.7408 40.5302 27.2592 40.5302 33.5477 34.9311L32.1617 33.5449C26.6412 38.3835 18.3587 38.3835 12.8384 33.5449Z" fill="#006BCD" />
                                        <path d="M33.545 32.1616L34.9312 33.5476C40.5303 27.2591 40.5303 17.7407 34.9312 11.4521L33.545 12.8383C38.3836 18.3586 38.3836 26.6411 33.545 32.1616Z" fill="#006BCD" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4773 9.82323C21.8145 9.79639 22.1557 9.78271 22.5 9.78271C22.8442 9.78271 23.1854 9.79639 23.5227 9.82323V7.82617H21.4773V9.82323ZM35.1769 21.4774C35.2037 21.8147 35.2174 22.1558 35.2174 22.5001C35.2174 22.8443 35.2037 23.1855 35.1769 23.5228H37.1739V21.4774H35.1769ZM23.5227 35.177C23.1854 35.2038 22.8442 35.2175 22.5 35.2175C22.1557 35.2175 21.8145 35.2038 21.4773 35.177V37.174H23.5227V35.177ZM9.82311 23.5228C9.79627 23.1855 9.78259 22.8443 9.78259 22.5001C9.78259 22.1558 9.79627 21.8147 9.82311 21.4774H7.82605V23.5228H9.82311Z" fill="#006BCD" />
                                        <path d="M36.4903 9.04816C36.5998 8.78109 36.5382 8.47437 36.3342 8.27026C36.1301 8.06614 35.8233 8.00457 35.5564 8.11413L3.31869 21.3373C3.03687 21.4528 2.85906 21.7341 2.8755 22.0383C2.89195 22.3424 3.09905 22.6028 3.39167 22.6873L17.7649 26.8395L21.9171 41.2127C22.0015 41.5053 22.2621 41.7125 22.5663 41.7288C22.8705 41.7454 23.1517 41.5674 23.2673 41.2858L36.4903 9.04816ZM12.3878 21.5422L29.2128 14.3791L19.8841 23.7078L12.3878 21.5422Z" fill="#006BCD" stroke="white" stroke-width="0.7" stroke-linejoin="round" />
                                    </svg>
                                </TargetLink>
                            </LinksContainer>
                        </div>
                    </FooterColumn>
                </GridFooter>
                <UnderFooter>
                    <p>
                        © 2021, Все права защищены
                    </p>
                    <TargetLink
                        tag="a"
                        href="https://orangedm.agency/"
                        target="_blank"
                    >
                        <img
                            src={orangeIcon}
                            alt=""
                        />
                    </TargetLink>
                </UnderFooter>
            </Container>
        </OuterFooter>
    )
}

export default Footer