interface GetHtmlProps {
  title: string;
  thumbnail_bg?: string;
}

export function getHtml({
  title,
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #FFF;
        background: var(--background);
        /*
        background-image: 
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        */
        background-size: 100px 100px;
        height: 100vh;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
  
      svg {
        height: 40px;
        margin-top: 80px;
      }
  
      h1 {
        font-size: 62px;
        line-height: 80px;
  
        max-width: 80%;
      }


      /* New */
      :root {
        --size: 1;
        --background: #000;
        --color1: #1b2b43;
        --color6: #a3ffbf;
      }

      * {
        box-sizing: border-box;
      }

      body,
      div,
      p,
      img {
        margin: 0;
        padding: 0;
      }

      body {
        background: var(--background);
        color: white;
        font-family: Inter, Arial, Helvetica, sans-serif;
      }

      .ticket {
        width: 780px;
        height: 396px;
        margin: 100px auto;
        position: relative;
        transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
        background: linear-gradient(
          to right,
          var(--color1),
          var(--color6)
        );
        border-radius: 20px;
        padding: 5px;
      }

      .ticket:before,
      .ticket:after {
        content: '';
        display: block;
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        z-index: 2;
      }

      .ticket:before {
        top: 50%;
        left: -3.5%;
        transform: translateY(-50%);
        background: var(--color1);
      }

      .ticket:after {
        top: 50%;
        right: -3.5%;
        transform: translateY(-50%);
        background: var(--color6);
      }

      .ticker__wrapper {
        width: 100%;
        height: 100%;
      }

      .ticket__wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--background);
        border-radius: 15px;
      }
      .ticket__profile__wrapper:before,
      .ticket__profile__wrapper:after {
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--background);
        z-index: 3;
      }

      .ticket__profile__wrapper:before {
        top: 50%;
        left: -3.5%;
        transform: translateY(-50%);
      }

      .ticket__profile__wrapper:after {
        top: 50%;
        right: -3.5%;
        transform: translateY(-50%);
      }

      .left,
      .right {
        position: absolute;
        width: 50px;
        height: 100px;
        background: var(--background);
        z-index: 4;
      }

      .left {
        top: 50%;
        left: -50px;
        transform: translateY(-50%);
      }

      .right {
        top: 50%;
        right: -50px;
        transform: translateY(-50%);
      }

      .ticket__profile__wrapper {
        padding: 44px 160px 44px 63px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .ticket__profile {
        display: flex;
      }

      .ticket__profile__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
      }

      .ticket__profile__name {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.15;
        margin-bottom: 10px;
      }

      .ticket__profile__username {
        display: flex;
        align-items: center;
        color: #8a8f98;
      }

      .ticket__profile__image {
        width: 82px;
        height: 82px;
        border-radius: 50%;
      }

      .ticket__profile__githubIcon img {
        display: flex;
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }

      .ticket__event {
        margin-top: auto;
      }

      .ticket__number__wrapper {
        position: absolute;
        right: 50px;
        bottom: 0;
      }

      .ticket__number {
        transform: rotate(90deg) translateY(100px);
        transform-origin: bottom right;
        font-size: calc(40px * var(--size));
        font-weight: 700;
        text-align: center;
        padding-bottom: 35px;
        width: calc(396px - 12px);
        border-bottom: 2px dashed #333;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      
      
      <div class="ticket" id="ticket">
          <div class="left"></div>
          <div class="right"></div>
          <div class="ticket__wrapper">
              <div class="ticket__profile__wrapper">
                  <div class="ticket__profile">
                      <img src=${`https://unavatar.now.sh/github/${title}`} alt=${title} class="ticket__profile__image" />
                      <div class="ticket__profile__text">
                          <p class="ticket__profile__name">${title}</p>
                          <p class="ticket__profile__username">
                              <span class="ticket__profile__githubIcon">
                                  <img src="https://raw.githubusercontent.com/danidz96/nextjs-conf-ticket-clone/main/images/github-logo.svg" alt="github icon" />
                              </span>
                              ${title}
                          </p>
                      </div>
                  </div>
                  <div class="ticket__event">
                      <img src="https://raw.githubusercontent.com/danidz96/nextjs-conf-ticket-clone/main/images/event-logos.png" />
                  </div>
              </div>
              <div class="ticket__number__wrapper">
                  <div class="ticket__number">
                    <!--№ 000068-->
                  </div>
              </div>
          </div>
      </div>
      <!--
      <div class="ticket-visual_visual" id="ticket">
        <div class="ticket-visual-wrapper">
          <img class="ticket-profile_image" src=${`https://unavatar.now.sh/github/${title}`} />
          <h1 class="ticket-profile_name">${title}</h1>
        </div>
      </div>
      -->

    </div>
  </body>
  </html>`
}