import Image from 'next/image';
import FooterLink from '../../molecules/FooterLink';
import Title from './Title';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a className="mb-30" href="/#">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Title title="Company" />
                  <ul className="list-unstyled">
                    <FooterLink title="About Us" />
                    <FooterLink title="Press Release" />
                    <FooterLink title="Terms of Use" />
                    <FooterLink title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Title title="Support" />
                  <ul className="list-unstyled">
                    <FooterLink title="Refund Policy" />
                    <FooterLink title="Unlock Rewards" />
                    <FooterLink title="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <Title title="Connect" />
                  <ul className="list-unstyled">
                    <FooterLink
                      title="hi@store.gg"
                      link="mailto: hi@store.gg"
                    />
                    <FooterLink
                      title="team@store.gg"
                      link="mailto: team@store.gg"
                    />
                    <FooterLink
                      title="Pasific 12, Jakarta Selatan"
                      link="http://maps.google.com/?q=Pasific 12,
                      Jakarta Selatan"
                    />
                    <FooterLink
                      title="021 - 1122 - 9090"
                      link="tel: 02111229090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
