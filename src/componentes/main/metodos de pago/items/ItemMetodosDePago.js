import React from "react";
import style from "./style.css";

const ItemMetodosDePago = () => {
  return (
    <>
      <div className="payment-methods-item">
        <div className="payment-methods-svg">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 47.5c12.979 0 23.5-10.521 23.5-23.5S36.979.5 24 .5.5 11.021.5 24 11.021 47.5 24 47.5Z"
                stroke="#EEE"
              />
              <path
                d="M14 24.5a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m6 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5"
                fill="#FFF"
              />
              <path opacity=".3" d="M12 12h24v24H12z" />
              <g transform="translate(12 16)">
                <path
                  d="M1.584 0h20.832C23.291 0 24 .71 24 1.584v12.832c0 .875-.71 1.584-1.584 1.584H1.584C.709 16 0 15.29 0 14.416V1.584C0 .709.71 0 1.584 0Z"
                  fill="#5697FA"
                />
                <path fill="#0864EE" d="M0 3h24v3H0z" />
                <path fill="#FFF" d="M2 7h20v3H2z" />
                <rect
                  fill="#0864EE"
                  x="2"
                  y="13"
                  width="10"
                  height="1"
                  rx=".5"
                />
                <rect
                  fill="#0864EE"
                  x="2"
                  y="11"
                  width="15"
                  height="1"
                  rx=".5"
                />
              </g>
            </g>
          </svg>
        </div>
        <div>
          <div className="payment-methods-title-container">
            <h3 className="payment-methods-title">Tarjeta de credito</h3>
            <h4 className="payment-methods-subtitle">
              <a href=""> Ver promociones bancarias</a>
            </h4>
          </div>
        </div>
      </div>
      <div className="payment-methods-item">
        <div className="payment-methods-svg">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 47.5c12.979 0 23.5-10.521 23.5-23.5S36.979.5 24 .5.5 11.021.5 24 11.021 47.5 24 47.5Z"
                stroke="#EEE"
              />
              <path
                d="M14 24.5a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m6 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5"
                fill="#FFF"
              />
              <path
                d="M12 17.524c0-.854.7-1.524 1.565-1.524h20.87c.864 0 1.565.672 1.565 1.524v12.952C36 31.33 35.301 32 34.435 32h-20.87C12.701 32 12 31.328 12 30.476V17.524Z"
                fill="#5697FA"
              />
              <path
                fill="#0864EE"
                d="M14 22h4v-3h-4zm0 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.499.499 0 0 1-.5-.5m0-2c0-.276.246-.5.552-.5h6.896c.305 0 .552.222.552.5 0 .276-.246.5-.552.5h-6.896c-.305 0-.552-.222-.552-.5"
              />
              <path
                d="M14 24.5a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0c0-.276.226-.5.5-.5h3a.501.501 0 0 1 0 1h-3a.498.498 0 0 1-.5-.5"
                fill="#FFF"
              />
            </g>
          </svg>
        </div>
        <div className="payment-methods-title-container">
          <h3 className="payment-methods-title">Tarjeta de debito</h3>
          <h4 className="payment-methods-subtitle">
            <a href="">Ver mas</a>
          </h4>
        </div>
      </div>
      <div className="payment-methods-item">
        <div className="payment-methods-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="#EEE"
                d="M24 .5c6.49 0 12.364 2.63 16.617 6.883S47.5 17.511 47.5 24c0 6.49-2.63 12.364-6.883 16.617S30.489 47.5 24 47.5c-6.49 0-12.364-2.63-16.617-6.883S.5 30.489.5 24c0-6.49 2.63-12.364 6.883-16.617S17.511.5 24 .5z"
              />
              <path
                d="M14 24.5a.5.5 0 0 1 .5-.5h3c.277 0 .5.222.5.5 0 .276-.226.5-.5.5h-3a.498.498 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h3a.499.499 0 1 1 0 1h-3a.498.498 0 0 1-.5-.5m5 0c0-.276.226-.5.5-.5h3a.499.499 0 1 1 0 1h-3a.498.498 0 0 1-.5-.5m6 0c0-.276.226-.5.5-.5h3c.277 0 .5.222.5.5 0 .276-.226.5-.5.5h-3a.498.498 0 0 1-.5-.5"
                fill="#FFF"
              />
              <g transform="translate(14 14)">
                <path
                  fill="#5697FA"
                  d="M10.797 0a4.4 4.4 0 1 0 .005 8.799A4.4 4.4 0 0 0 10.797 0"
                />
                <path
                  fill="#FFF"
                  d="M10.724 6.533v.529c0 .078-.07.138-.153.138h-.253c-.083 0-.147-.06-.147-.138v-.523C9.188 6.437 8.8 5.746 8.8 5.26c0-.078.064-.138.146-.138h.381c.083 0 .133.066.14.126.019.199.146.733.965.733.552 0 .889-.168.889-.63 0-.962-2.406-.349-2.406-1.93 0-.666.457-1.057 1.256-1.123v-.583c0-.06.051-.114.121-.114h.311c.064 0 .12.054.12.114v.59c.858.095 1.188.642 1.188 1.105 0 .078-.07.138-.152.138h-.381c-.083 0-.133-.042-.152-.126-.045-.289-.204-.565-.794-.565-.502 0-.838.114-.838.565C9.594 4.4 12 3.775 12 5.35c0 .775-.603 1.111-1.276 1.183M4.416 18.69c0 .07-.057.127-.128.127H.512a.127.127 0 0 1-.128-.128v-7.778c0-.072.057-.128.128-.128h3.776c.071 0 .128.056.128.128v7.778zm-.128-8.29H.512a.51.51 0 0 0-.512.51v7.78c0 .076.015.152.051.219a.505.505 0 0 0 .461.291h3.776a.51.51 0 0 0 .512-.51v-7.78a.51.51 0 0 0-.512-.51z"
                />
                <path
                  fill="#5697FA"
                  d="M4.8 11.174h8.4c.493 0 1.177.33 1.177 1.206 0 .876-.663 1.268-1.206 1.268h-3.106c-.24 0-.422.113-.422.352s.153.375.381.375h3.832a1009.4 1009.4 0 0 0 4.227-3.665c.734-.644 1.374-.102 1.494 0 .121.103.815.764.114 1.689-.7.925-3.156 3.995-3.531 4.448-.375.453-.832.753-2.198.753H5.158L4.8 11.174z"
                />
                <rect
                  width="5.6"
                  height="9.6"
                  y="9.6"
                  fill="#0763EE"
                  rx="1.68"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="payment-methods-title-container">
          <h3 className="payment-methods-title">Cuotas sin tarjetas</h3>
          <h4 className="payment-methods-subtitle">
            <a href="">Conocer mercado credito</a>
          </h4>
        </div>
      </div>
      <div className="payment-methods-item">
        <div className="payment-methods-svg">
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>efectivo</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <path
                d="M2.73670471,0.519849876 C3.08307444,0.173480149 3.53663275,0.00014764268 3.99048635,0.00014764268 C4.41215385,0.00014764268 4.83352605,0.14985732 5.16956079,0.449276675 C5.79054591,1.14585484 5.76780893,2.2136067 5.09898759,2.88213275 L2.88198511,5.09943052 C2.21345906,5.76766129 1.1457072,5.79216998 0.448243176,5.16882258 C-0.171856079,4.4725397 -0.148823821,3.40537841 0.519702233,2.73714764 L2.73670471,0.519849876 Z M5.09898759,2.88213275 C5.44535732,2.53576303 5.89921092,2.36243052 6.35306452,2.36243052 C6.77443672,2.36243052 7.19580893,2.51184491 7.53154839,2.81155955 C8.15282878,3.50784243 8.13009181,4.57588958 7.46127047,5.24441563 L5.24426799,7.4617134 C4.57603722,8.12964888 3.50917122,8.15445285 2.81141191,7.53199132 C2.1904268,6.83600372 2.21316377,5.76795658 2.88198511,5.09943052 L5.09898759,2.88213275 Z M7.46127047,5.24441563 C7.8076402,4.89804591 8.26119851,4.7247134 8.71505211,4.7247134 C9.13701489,4.7247134 9.55897767,4.87471836 9.89501241,5.17502357 C10.5151117,5.87130645 10.4920794,6.93817246 9.82355335,7.60669851 L7.60655087,9.82399628 C6.9383201,10.4919318 5.87145409,10.5167357 5.17369479,9.89427419 C4.55270968,9.1982866 4.57544665,8.13023945 5.24426799,7.4617134 L7.46127047,5.24441563 Z M9.82355335,7.60669851 C10.1699231,7.26032878 10.6237767,7.08699628 11.077335,7.08699628 C11.4992978,7.08699628 11.9212605,7.23700124 12.2572953,7.53730645 C12.8773945,8.23358933 12.854067,9.30045533 12.1858362,9.96898139 L9.96853846,12.1862792 C9.30089826,12.8542146 8.23373697,12.8790186 7.53627295,12.2568524 C6.91499256,11.5605695 6.93772953,10.4925223 7.60655087,9.82399628 L9.82355335,7.60669851 Z"
                id="path-1"
              ></path>
            </defs>
            <g
              id="Symbols"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="efectivo">
                <g id="Group-8">
                  <g id="Group-4">
                    <path
                      d="M24,47.5 C36.9786916,47.5 47.5,36.9786916 47.5,24 C47.5,11.0213084 36.9786916,0.5 24,0.5 C11.0213084,0.5 0.5,11.0213084 0.5,24 C0.5,36.9786916 11.0213084,47.5 24,47.5 Z"
                      id="Oval-Copy-3"
                      stroke="#EEEEEE"
                    ></path>
                    <g
                      id="Group-12"
                      transform="translate(10.000000, 10.000000)"
                    >
                      <g id="Group-9" transform="translate(0.416873, 0.590571)">
                        <rect
                          id="Rectangle-51"
                          opacity="0.3"
                          x="0"
                          y="0"
                          width="27.1662531"
                          height="27.1662531"
                        ></rect>
                        <g
                          id="Group-4"
                          transform="translate(0.000000, 1.181141)"
                        >
                          <g id="Group">
                            <polygon
                              id="Rectangle-path"
                              fill="#5697FA"
                              points="9.44913151 -1.42108547e-14 24.8039702 15.3548387 15.3548387 24.8039702 0 9.44913151"
                            ></polygon>
                            <path
                              d="M3.87524655,7.93616785 L7.93616785,3.87524655 C8.24736367,4.38459846 8.80854578,4.72456576 9.44913151,4.72456576 C10.0897172,4.72456576 10.6508994,4.38459846 10.9620952,3.87524655 L20.9287237,13.841875 C20.4193718,14.1530709 20.0794045,14.714253 20.0794045,15.3548387 C20.0794045,15.9954244 20.4193718,16.5566066 20.9287237,16.8678024 L16.8678024,20.9287237 C16.5566066,20.4193718 15.9954244,20.0794045 15.3548387,20.0794045 C14.714253,20.0794045 14.1530709,20.4193718 13.841875,20.9287237 L3.87524655,10.9620952 C4.38459846,10.6508994 4.72456576,10.0897172 4.72456576,9.44913151 C4.72456576,8.80854578 4.38459846,8.24736367 3.87524655,7.93616785 Z"
                              id="Combined-Shape"
                              fill="#FFFFFF"
                            ></path>
                            <circle
                              id="Oval-29"
                              fill="#3483FA"
                              cx="12.4019849"
                              cy="12.4019853"
                              r="4.13399504"
                            ></circle>
                            <path
                              d="M10.5227477,13.8677556 L10.2583454,14.1321579 C10.0416222,14.3488811 10.1694889,14.749819 10.6007681,14.7454846 C10.6178687,14.7450143 10.6341459,14.7380384 10.6462799,14.7259795 L11.0038732,14.3683862 C11.6973875,14.9210304 12.4754237,14.9427027 12.9977267,14.4203998 C13.5200296,13.8980969 13.5156951,13.2630979 12.9522148,12.3246864 L12.6748091,11.8478954 C12.4277446,11.3624354 12.4754237,11.1760535 12.6509695,11.0005077 C12.8265153,10.8249619 13.1472657,10.816293 13.4463437,11.0611902 C13.482586,11.0912238 13.517305,11.1230495 13.5503708,11.1565484 C13.6373926,11.2469729 13.7124169,11.3482193 13.7735957,11.4577936 C13.8952069,11.6762148 13.9884294,11.909271 14.0510014,12.1513079 C14.0684135,12.2328164 14.1081881,12.3078627 14.1658647,12.3680311 C14.3344075,12.5332361 14.6041468,12.5332361 14.7726897,12.3680311 C14.8878016,12.2554637 14.9267479,12.0861319 14.8723823,11.9345847 C14.7928826,11.5739659 14.6353124,11.235153 14.4107619,10.9419924 L14.7445156,10.6082387 C14.7565746,10.5961046 14.7635505,10.5798274 14.7640207,10.5627268 C14.7640207,10.1292804 14.3565811,10.0122499 14.1506941,10.2203042 L13.9339709,10.4370274 C13.2577945,9.8843832 12.4927616,9.86054365 11.9834621,10.3806793 C11.4741626,10.900815 11.4589919,11.5163089 12.0138033,12.4633893 L12.299878,12.9315114 C12.5577786,13.4234731 12.5166012,13.6228584 12.328052,13.7984042 C12.1113288,14.0151274 11.8209197,13.9912878 11.5045038,13.7377217 C11.5045038,13.7377217 11.4633264,13.7008788 11.4048111,13.6423635 C11.3129522,13.5512858 11.2288603,13.4526952 11.1534122,13.3476199 C10.9604053,13.0406722 10.8314027,12.6978938 10.7741466,12.3398571 C10.7696216,12.1676183 10.6635112,12.0144142 10.5038622,11.9496156 C10.3442133,11.8848169 10.1613439,11.9207292 10.0380573,12.0410915 C9.91477069,12.1614537 9.87447961,12.3434085 9.93542784,12.5045667 C10.0134501,13.0011229 10.2154535,13.4699795 10.5227477,13.8677556 L10.5227477,13.8677556 Z"
                              id="Shape"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                          <path
                            d="M19.5831266,5.22828784 L18.2799993,4.01225694 C16.6644777,2.50471104 14.0879163,2.54952596 12.5230681,4.11437423 L9.44913151,7.18831075 L9.44913151,7.18831075 C10.7537843,8.49296356 13.5831266,7.77888147 13.5831266,7.77888147 L13.5831266,7.77888147 C13.5831266,7.77888147 15.3548387,6.00716921 15.3548387,6.00716921 L23.5331273,14.2282878 L26.5831266,14.2282878 L26.5831266,5.22828784 L19.5831266,5.22828784 Z"
                            id="Shape"
                            fill="#0864EE"
                          ></path>
                          <g
                            id="Page-1"
                            transform="translate(3.248139, 10.334988)"
                          >
                            <mask id="mask-2" fill="white">
                              <use href="#path-1"></use>
                            </mask>
                            <use
                              id="Clip-2"
                              fill="#0864EE"
                              href="#path-1"
                            ></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="payment-methods-title-container">
          <h3 className="payment-methods-title">Efectivo</h3>
          <h4 className="payment-methods-subtitle">
            <a href="">Ver mas</a>
          </h4>
        </div>
      </div>
    </>
  );
};

export default ItemMetodosDePago;