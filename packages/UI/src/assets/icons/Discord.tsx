import * as React from 'react';

function Discord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.131 2.02697C27.1221 2.01 27.1074 1.99671 27.0894 1.98947C25.0147 1.05243 22.8253 0.384243 20.5759 0.00163895C20.5555 -0.00210093 20.5344 0.000597065 20.5156 0.00934923C20.4968 0.0181014 20.4813 0.0324621 20.4712 0.0503891C20.1731 0.583045 19.9025 1.13017 19.6604 1.68968C17.2357 1.32737 14.7693 1.32737 12.3446 1.68968C12.1009 1.12875 11.8259 0.581488 11.521 0.0503891C11.5105 0.0328517 11.4949 0.0188217 11.4762 0.0101264C11.4576 0.0014311 11.4367 -0.0015265 11.4163 0.00163895C9.16665 0.38344 6.97706 1.05167 4.9026 1.98952C4.88484 1.99693 4.86985 2.00958 4.85971 2.02573C0.711179 8.12422 -0.425261 14.0728 0.132238 19.9476C0.133806 19.962 0.1383 19.976 0.145452 19.9886C0.152604 20.0013 0.162269 20.0124 0.173871 20.0213C2.58952 21.7819 5.29146 23.1259 8.16438 23.9957C8.18461 24.0017 8.20621 24.0014 8.22628 23.9949C8.24636 23.9885 8.26393 23.9761 8.27665 23.9595C8.89369 23.133 9.44043 22.2579 9.91132 21.3429C9.91779 21.3304 9.92148 21.3166 9.92216 21.3026C9.92283 21.2885 9.92047 21.2745 9.91523 21.2614C9.90999 21.2483 9.90199 21.2364 9.89176 21.2266C9.88153 21.2167 9.86929 21.2091 9.85586 21.2043C8.99369 20.8796 8.159 20.4881 7.35964 20.0336C7.34512 20.0252 7.33292 20.0134 7.32413 19.9993C7.31534 19.9851 7.31021 19.9691 7.30922 19.9525C7.30822 19.936 7.31139 19.9194 7.31842 19.9044C7.32546 19.8893 7.33616 19.8762 7.34957 19.8661C7.5173 19.7424 7.68514 19.6138 7.8453 19.4838C7.85953 19.4723 7.87675 19.4649 7.89502 19.4624C7.91328 19.46 7.93188 19.4627 7.9487 19.4701C13.1857 21.8228 18.8554 21.8228 24.0304 19.4701C24.0473 19.4622 24.066 19.4592 24.0846 19.4614C24.1031 19.4636 24.1206 19.4709 24.1351 19.4826C24.2953 19.6125 24.4631 19.7424 24.6321 19.8661C24.6456 19.8761 24.6564 19.8891 24.6635 19.9041C24.6707 19.9191 24.6739 19.9356 24.6731 19.9522C24.6722 19.9687 24.6672 19.9848 24.6585 19.999C24.6498 20.0132 24.6377 20.0251 24.6233 20.0336C23.8257 20.4919 22.9903 20.8832 22.1258 21.2031C22.1124 21.2081 22.1002 21.2159 22.0901 21.2259C22.0799 21.2358 22.072 21.2478 22.0668 21.261C22.0617 21.2742 22.0595 21.2884 22.0602 21.3025C22.061 21.3166 22.0648 21.3304 22.0714 21.3429C22.5502 22.2528 23.0961 23.1268 23.7048 23.958C23.7172 23.9751 23.7347 23.9879 23.7548 23.9946C23.775 24.0014 23.7968 24.0017 23.8171 23.9955C26.6952 23.1287 29.4018 21.7846 31.8205 20.0213C31.8323 20.0128 31.8421 20.002 31.8493 19.9895C31.8565 19.977 31.8608 19.9632 31.8621 19.9489C32.5296 13.1569 30.7448 7.25711 27.131 2.02697ZM10.6934 16.3704C9.1167 16.3704 7.81754 14.9461 7.81754 13.1969C7.81754 11.4477 9.09151 10.0233 10.6934 10.0233C12.3078 10.0233 13.5944 11.4601 13.5692 13.1968C13.5692 14.9461 12.2952 16.3704 10.6934 16.3704ZM21.3264 16.3704C19.7497 16.3704 18.4506 14.9461 18.4506 13.1969C18.4506 11.4477 19.7245 10.0233 21.3264 10.0233C22.9409 10.0233 24.2275 11.4601 24.2023 13.1968C24.2023 14.9461 22.9409 16.3704 21.3264 16.3704Z"
        fill={props.fill || 'black'}
      />
    </svg>
  );
}

export default Discord;
