package baseapp

import sdk "github.com/cosmos/cosmos-sdk/types"

var MempoolExecMsgFilterKey = "MempoolExecMsgFilterKey"

type MempoolExecMsgFilter = func(sdk.Msg) bool

func (app *BaseApp) GetCheckState() *state {
	return app.checkState
}
