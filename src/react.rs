use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
extern "C" {
    fn react_create_element(element: JsValue, props: JsValue) -> JsValue;
}

pub enum ReactElement {
    Intrinsic(String)
}
