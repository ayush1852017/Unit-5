import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerNotes}>
        <section className={style.footerNotesSection}>
          <ul>
            <li>
              <span className={style.footerSpan}>
                1. Get extra trade-in credit when you trade in an eligible
                iPhone, iPad, Mac, or Apple&nbsp;Watch and purchase a new Apple
                device through May 31, 2022. The extra trade-in credit may range
                from $10 to $50 for iPhone, $10 to $50 for iPad, $10 for Mac,
                and $20 to $40 for Apple&nbsp;Watch. Additional terms from Apple
                or Apple's trade-in partners may apply.
                <br />
                <br />
                Trade-in values will vary based on the condition, year, and
                configuration of your eligible trade-in device. Not all devices
                are eligible for credit. You must be at least 18 years old to be
                eligible to trade in for credit or for an Apple Gift Card.
                Trade-in value may be applied toward a qualifying new device
                purchase, or added to an Apple Gift Card. Actual value awarded
                is based on receipt of a qualifying device matching the
                description provided when estimate was made. Sales tax may be
                assessed on full value of a new device purchase. In-store
                trade-in requires presentation of a valid photo ID (local law
                may require saving this information). Offer may not be available
                in all stores, and may vary between in-store and online
                trade-in. Some stores may have additional requirements. Apple or
                its trade-in partners reserve the right to refuse or limit
                quantity of any trade-in transaction for any reason. More
                details are available from Apple’s trade-in partner for trade-in
                and recycling of eligible devices. Restrictions and limitations
                may apply.
              </span>
            </li>
            <br />
            <li>
              New subscribers only. $4.99/month after free trial. Plan
              automatically renews until cancelled.
              <a className={style.footerNotesLink} href="/promo/">
                Terms
              </a>
              &nbsapply.
            </li>
            <br />
            <li>
              To access and use all the features of Apple&nbsp;Card, you must
              add Apple&nbsp;Card to Wallet on an iPhone or iPad with the latest
              version of iOS or iPadOS. Update to the latest version by going to
              Settings &gt; General &gt; Software Update. Tap Download
              and&nbsp;Install.
            </li>
            <br />
            <li>
              Available for qualifying applicants in the United&nbsp;States.
            </li>
            <br />
            <li>
              Apple&nbsp;Card is issued by Goldman Sachs Bank USA,
              Salt&nbsp;Lake&nbsp;City&nbsp;Branch.
            </li>
            <br />
            <li>
              Learn more about how Apple&nbsp;Card applications are evaluated at{" "}
              <a
                className={style.footerNotesLink}
                href="https://support.apple.com/kb/HT209218"
              >
                support.apple.com/kb/HT209218
              </a>
              .
            </li>
          </ul>
        </section>
        <nav className={style.footerNav}>
          <div className={style.footerNavColumn}>
            <label>
              <h3 className={style.footerNavColHeading}>Shop and Learn</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/store" className={style.footerNavLink}>
                <li>Store</li>
              </Link>

              <Link to="/mac" className={style.footerNavLink}>
                <li>Mac</li>
              </Link>

              <Link to="/iPad" className={style.footerNavLink}>
                <li>iPad</li>
              </Link>

              <Link to="/iPhone" className={style.footerNavLink}>
                <li>iPhone</li>
              </Link>

              <Link to="/watch" className={style.footerNavLink}>
                <li>Watch</li>
              </Link>

              <Link to="/airpods" className={style.footerNavLink}>
                <li>AirPods</li>
              </Link>

              <Link to="/tvhome" className={style.footerNavLink}>
                <li>Tv & Home</li>
              </Link>

              <Link to="/ipodtouch" className={style.footerNavLink}>
                <li>iPod touch</li>
              </Link>
              <Link to="/airtag" className={style.footerNavLink}>
                <li>Air Tag</li>
              </Link>

              <Link to="/accessories" className={style.footerNavLink}>
                <li>Accessories</li>
              </Link>

              <Link to="/giftcard" className={style.footerNavLink}>
                <li>Gift card</li>
              </Link>
            </ul>
          </div>
          <div className={style.footerNavColumn}>
            <label>
              <h3 className={style.footerNavColHeading}>Services</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Mac</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>iPad</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>iPhone</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Watch</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>AirPods</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>TV & Home</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>iPod touch</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>AirTag</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Accessories</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Gift Cards</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Services</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Music</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple TV+</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Fitness+</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple News+</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Arcade</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>iCloud</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple One</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Card</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Books</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Podcasts</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>App Store</li>
              </Link>
            </ul>
            <labe className={style.footerNavLink} l>
              <h3 className={style.footerNavColHeading}>Account</h3>
            </labe>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Manage Your Apple ID</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Store Account</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>iCloud.com</li>
              </Link>
            </ul>
          </div>
          <div className={style.footerNavColumn}>
            <label>
              <h3 className={style.footerNavColHeading}>Apple Store</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Find a Store</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Genius Bar</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Today at Apple</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Camp</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Store App</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Refurbished and Clearance</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Financing</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Trade In</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Order Status</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Shopping Help</li>
              </Link>
            </ul>
          </div>
          <div className={style.footerNavColumn}>
            <label>
              <h3 className={style.footerNavColHeading}>For Business</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple and Business</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Shop for Business</li>
              </Link>
            </ul>
            <label>
              <h3 className={style.footerNavColHeading}>For Education</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple and Education</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Shop for K-12</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Shop for College</li>
              </Link>
            </ul>
            <label>
              <h3 className={style.footerNavColHeading}>For healthcare</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple in Healthcare</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Health on Apple Watch</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Health Records on iPhone</li>
              </Link>
            </ul>
            <label>
              <h3 className={style.footerNavColHeading}>For Goverment</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Shop for Government</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Shop for Veterans and Militar</li>
              </Link>
            </ul>
          </div>
          <div>
            <label>
              <h3 className={style.footerNavColHeading}>Apple Values</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Accessibility</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Education</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Environment</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Inclusion and Diversity</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Privacy</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Racial Equity and Justice</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Supplier Responsibility</li>
              </Link>
            </ul>
            <label>
              <h3 className={style.footerNavColHeading}>About Apple</h3>
            </label>
            <ul className={style.footerNavLinks}>
              <Link to="/" className={style.footerNavLink}>
                <li>Newsroom</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Apple Leadership</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Career Opportunities</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Investors</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Ethics & Compliance</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Events</li>
              </Link>
              <Link to="/" className={style.footerNavLink}>
                <li>Contact Apple</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
