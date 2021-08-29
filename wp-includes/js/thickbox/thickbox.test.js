const rewire = require("rewire")
const thickbox = rewire("./thickbox")
const tb_init = thickbox.__get__("tb_init")
const tb_show = thickbox.__get__("tb_show")
const tb_showIframe = thickbox.__get__("tb_showIframe")
const tb_remove = thickbox.__get__("tb_remove")
const tb_position = thickbox.__get__("tb_position")
const tb_parseQuery = thickbox.__get__("tb_parseQuery")
const tb_getPageSize = thickbox.__get__("tb_getPageSize")
const tb_detectMacXFF = thickbox.__get__("tb_detectMacXFF")
// @ponicode
describe("tb_init", () => {
    test("0", () => {
        let callFunction = () => {
            tb_init(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tb_init(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tb_init(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_show", () => {
    test("0", () => {
        let callFunction = () => {
            tb_show("SELECT * FROM %s ORDER BY id ASC", "TB_iframe", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tb_show("SELECT * FROM %s LIMIT 1", "https://twitter.com/path?abcTB_iframe", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tb_show("DELETE FROM %s WHERE cache_key = %%s", "?https://", 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            tb_show(-1, "HTTP://WWW.EXAMPLE.COM/ROUTE/123?FOO=BARTB_inlineTB_inlinehttps://?", "http://placeimg.com/640/480/cats")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            tb_show(-10, "?", "http://placeimg.com/640/480/cats")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            tb_show(Infinity, "", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_showIframe", () => {
    test("0", () => {
        let callFunction = () => {
            tb_showIframe()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_remove", () => {
    test("0", () => {
        let callFunction = () => {
            tb_remove()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_position", () => {
    test("0", () => {
        let callFunction = () => {
            tb_position()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_parseQuery", () => {
    test("0", () => {
        let callFunction = () => {
            tb_parseQuery("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tb_parseQuery("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tb_parseQuery("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            tb_parseQuery(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            tb_parseQuery(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            tb_parseQuery(null)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_getPageSize", () => {
    test("0", () => {
        let callFunction = () => {
            tb_getPageSize()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tb_detectMacXFF", () => {
    test("0", () => {
        let callFunction = () => {
            tb_detectMacXFF()
        }
    
        expect(callFunction).not.toThrow()
    })
})
