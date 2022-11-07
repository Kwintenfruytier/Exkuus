import Image from '@/common/image';
import React, { useState } from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';
import { Header, TextBlue } from 'styles/typography';
import Dialog from '@/common/modal';

const Booking = () => {
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log('onProfilePageViewed'),
        onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
        onEventTypeViewed: () => console.log('onEventTypeViewed'),
        onEventScheduled: e => console.log(e.data.payload),
    });

    return (
        <div>
            <div
                style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', marginTop: 50 }}
            >
                <Image
                    filename="booking.png"
                    alt="logo"
                    width="450px"
                    height="100%"
                    mobile_width="280px"
                />
                <Header style={{ paddingBottom: 50, textAlign: 'center' }}>
                    wees trots op jezelf!
                    <br /> je hebt de eerste stap <br />
                    gezet naar{' '}
                    <TextBlue fontWeight="700" mobileFontSize="28px" fontSize="45px">
                        succes!
                    </TextBlue>
                </Header>
            </div>
            <InlineWidget
                styles={{ height: '100vh' }}
                url="https://calendly.com/elysium-coaching/anderzom"
            />
        </div>
    );
};

export default Booking;