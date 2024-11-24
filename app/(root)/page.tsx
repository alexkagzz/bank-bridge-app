import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import {getLoggedInUser} from "@/lib/actions/user.actions";

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    console.log({loggedIn})

    return (
        <section className="home">
            <div className="home-content">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || "Guest"}
                    subtext="Access and manage your accounts and transactions efficiently"
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50, },{currentBalance: 100.00}]}
            />
        </section>
    );
}

export default Home;
